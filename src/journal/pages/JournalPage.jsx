import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../view"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

export const JournalPage = () => {
    return (
        <JournalLayout>

            <NothingSelectedView />

            {/* <NoteView/> */}

            <IconButton
                size="large"
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom :50
                }}
            >
                <FontAwesomeIcon icon={faPlus} fontSize={30} />

            </IconButton>

        </JournalLayout>
    )
}
