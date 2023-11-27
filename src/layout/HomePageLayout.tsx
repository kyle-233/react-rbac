import { ReactNode } from "react"

interface HomePageLayoutProps {
    children: ReactNode
}

export const HomePageLayout = ({children}: HomePageLayoutProps): JSX.Element => {
  return (
    <div>
        <div>Left</div>
        <div>
            {children}
        </div>
    </div>
  )
}

