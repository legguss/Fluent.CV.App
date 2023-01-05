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

export interface Resume
{
   Personal?: Personal
   Education?: Education
   Roles?: Label[]
   Skills?: Label[]
   Tools?: Label[]
   Story?: string[]
   Statuses?: Status[]
   Experiences?: Experience[]
   Projects?: Project[]
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
}
