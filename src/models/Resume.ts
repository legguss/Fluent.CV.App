export interface Personal
{
   FullName: string
   Email?: string
   Phone?: string
   Address?: string
   Skype?: string
   LinkedIn?: string
   WebSite?: string
   Title?: string
}
export interface Story
{
   Title?: string
   Items?: string[]
   MultiStory?: boolean
}
export interface Styles
{
   Id: string
   Image: boolean
}

export interface Resume
{
   Id?: string|string[]
   Styles?: Styles
   Personal?: Personal
   Education?: Education[]
   Certificates?: Education[]
   Roles?: Label[]
   Skills?: Label[]
   Tools?: Label[]
   Story?: Story
   Statuses?: Status[]
   Experiences?: Experiences
   VisibleProjects?: Project[]
}


export interface Project
{
   Name: string
   Summary: string
   Type?: string[]
   Status?: string[]
   Roles?: string[]
   Skills?: string[]
   Tools?: string[]
   Tasks?: string[]
   Challenges?: string[]
   Domains?: string[]
   Modules?: string[]
}

export interface Label
{
   Name: string
   Count: number
   Top?: number
}

export interface Education
{
   When?: string
   School?: string
   Department?: string
   Degree?: string
   Description?: string
}

export interface Experiences
{
   Title: string
   Items: Experience[]
}

export interface Experience
{
   Period: string
   Details: string[]
   Company: string
}

export interface Status
{
   Title: string
   Items: StatusRole[]
}

export interface StatusRole
{
   Summary: string
   Details: string[]
   JustSummary: boolean 
}
