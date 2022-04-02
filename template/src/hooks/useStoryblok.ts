import { useEffect, useState } from "react"
import StoryblokClient from "storyblok-js-client"

const Storyblok = new StoryblokClient({
  accessToken: process.env.GATSBY_STORYBLOK_TOKEN,
  cache: {
    clear: "auto",
    type: "memory",
  },
})

export function useStoryblok(originalStory: any, location: Location) {
  const [story, setStory] = useState(originalStory)
  if (story && typeof story.content === "string") {
    story.content = JSON.parse(story.content)
  }

  const getLiveStory = async (event: any) => {
    if (!event?.storyId) {
      return
    }
    try {
      const response = await Storyblok.get(`cdn/stories/${event.storyId}`, {
        version: "draft",
      })
      const { data: { story } } = response
      setStory(story)
    } catch(ex) {
      console.log(ex)
    }
  }

  const addEventListeners = () => {
    const StoryblokBridge = window["StoryblokBridge"]

    if (typeof StoryblokBridge !== "undefined") {
      const storyblokInstance = new StoryblokBridge()

      storyblokInstance.on(["change", "published"], () => {
        if (location) {
          location.reload()
        }
      })

      // live update the story on input events
      storyblokInstance.on(["input"], (event: any) => {
        if (story && event.story._uid === story._uid) {
          setStory(event.story)
        }
      })

      storyblokInstance.on(["enterEditmode"], getLiveStory)
    }
  }

  const addBridge = (callback: Function) => {
    const existingScript = document.getElementById("storyblokBridge")
    if (!existingScript) {
      const script = document.createElement("script")
      script.src = "//app.storyblok.com/f/storyblok-v2-latest.js"
      script.id = "storyblokBridge"
      document.body.appendChild(script)
      script.onload = () => {
        callback()
      }
    } else {
      callback()
    }
  }

  useEffect(() => {
    if (location.search.includes("_storyblok")) {
      addBridge(addEventListeners)
    } else {
      getLiveStory({ storyId: story.internalId })
    }
  }, [])

  return story
}

export default Storyblok
