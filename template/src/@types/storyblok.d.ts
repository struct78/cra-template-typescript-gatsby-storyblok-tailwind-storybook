export interface ContactFormStoryblok {
  name?: string;
  redirect_uri?:
    | {
        cached_url?: string;
        linktype?: string;
        [k: string]: any;
      }
    | {
        id?: string;
        cached_url?: string;
        linktype?: "story";
        [k: string]: any;
      }
    | {
        url?: string;
        cached_url?: string;
        linktype?: "asset" | "url";
        [k: string]: any;
      }
    | {
        email?: string;
        linktype?: "email";
        [k: string]: any;
      };
  _uid: string;
  component: "contact-form";
  [k: string]: any;
}

export interface ContainerStoryblok {
  children?: any[];
  width?: "" | "fixed" | "full";
  align?: "" | "left" | "center" | "right";
  justify?: "" | "left" | "center" | "right";
  textAlign?: "" | "left" | "center" | "right";
  padding?: "" | "none" | "small" | "medium" | "large" | "x-large";
  paddingTop?: "" | "none" | "small" | "medium" | "large" | "x-large";
  paddingBottom?: "" | "none" | "small" | "medium" | "large" | "x-large";
  paddingLeft?: "" | "none" | "small" | "medium" | "large" | "x-large";
  paddingRight?: "" | "none" | "small" | "medium" | "large" | "x-large";
  margin?: "" | "none" | "small" | "medium" | "large" | "x-large";
  marginTop?: "" | "none" | "small" | "medium" | "large" | "x-large";
  marginBottom?: "" | "none" | "small" | "medium" | "large" | "x-large";
  marginLeft?: "" | "none" | "small" | "medium" | "large" | "x-large";
  marginRight?: "" | "none" | "small" | "medium" | "large" | "x-large";
  _uid: string;
  component: "container";
  [k: string]: any;
}

export interface DividerStoryblok {
  _uid: string;
  component: "divider";
  [k: string]: any;
}

export interface HeadingStoryblok {
  text?: string;
  size?: "" | "h1" | "h2" | "h3" | "h4" | "h5";
  _uid: string;
  component: "heading";
  [k: string]: any;
}

export interface ImageStoryblok {
  desktopImage?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  desktopAspectRatio?: "" | "1" | "0.75" | "1.33333" | "0.5625" | "1.77777777778";
  desktopHidden?: boolean;
  mobileImage?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  lazy?: boolean;
  mobileAspectRatio?: "" | "1" | "0.75" | "1.333333" | "0.5625" | "1.77777777778";
  mobileHidden?: boolean;
  _uid: string;
  component: "image";
  [k: string]: any;
}

export interface NavigationStoryblok {
  pages?: any[];
  _uid: string;
  component: "navigation";
  [k: string]: any;
}

export interface PageStoryblok {
  openGraphDescription?: string;
  body?: any[];
  title?: string;
  openGraphImage?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  openGraphTitle?: string;
  seoDescription?: string;
  seoTitle?: string;
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface TextStoryblok {
  text?: any;
  _uid: string;
  component: "text";
  [k: string]: any;
}
