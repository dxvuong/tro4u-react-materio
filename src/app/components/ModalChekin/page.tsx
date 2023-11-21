import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import React from 'react'
interface ModalCheckinProps {
    open: boolean,
    close: () => void
}
const ModalCheckin = ({ open, close }: ModalCheckinProps) => {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "90%",
        height: "100%",
        borderRadius: "6px",
        p: 4,
        ":focus-visible": {
            outline: "none"
        },

        "@media (max-width: 783px)": {
            height: "auto"
        },
    };
    const styleVideo = {
        width: "100%",
        height: "100%",
        borderRadius: "6px"
    }
    return (
        <Modal
            open={open}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <iframe style={styleVideo} src="https://www.youtube.com/embed/Ws-QlpSltr8?autoplay=1&mute=0" title="Đen - Trốn Tìm ft. MTV band (M/V)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
            </Box>

        </Modal>
    )
}

export default ModalCheckin