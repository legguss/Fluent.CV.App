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

export interface CvDocument
{
   Personal?: Personal
   Education?: Education
   Roles?: Label[]
   Skills?: Label[]
   Tools?: Label[]
   Story?: string[]
   Statuses?: Status[]
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
