import { SidebarSection } from "../../../../components/sidebar-section"
import { useAccount } from "../../../../store/auth/hooks"

export const WhoFollow = () => {
    const account = useAccount()
    return (
        <SidebarSection title="Who to follow" more={`/connect_people?user_id=${account.id}`}>

        </SidebarSection>
    )
} 