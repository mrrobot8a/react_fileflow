
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

const MySwal = withReactContent(Swal)

// Definir la interfaz para las props
import { SweetAlertIcon, SweetAlertPosition } from 'sweetalert2';

interface CustomAlertProps {
    toast?: boolean;
    position?: SweetAlertPosition;
    icon?: SweetAlertIcon;
    title?: string;
    text?: string;
    timer?: number;
    background?: string;
    color?: string;
    iconColor?: string;
    showConfirmButton: boolean,
}

import { useEffect } from 'react';

export const CustomAlert = (props: CustomAlertProps) => {
    // Extraer las props
    const { toast, position, icon, title, text, timer, background, color, iconColor } = props;

    useEffect(() => {
        MySwal.fire({
            toast: toast,
            position: position,
            icon: icon,
            title: title,
            text: text,
            showConfirmButton: false,
            timer: timer,
            background: background,
            color: color,
            iconColor: iconColor,
            customClass: {
                title: 'alert-title',
                popup: 'alert-popup',
            }
        }).then(() => {
            return;
        })
    });
};


export function CustomAlertV2(props: CustomAlertProps): void {

    // Extraer las props
    const { toast, position, icon, title, text, timer, background, color, iconColor , showConfirmButton } = props;


    MySwal.fire({
        toast: toast,
        position: position,
        icon: icon,
        title: title,
        text: text,
        showConfirmButton: showConfirmButton,
        timer: timer,
        background: background,
        color: color,
        iconColor: iconColor,
        customClass: {
            title: 'alert-title',
            popup: 'alert-popup',
        }
    }).then(() => {
        return;
    })
}



export default CustomAlert;



