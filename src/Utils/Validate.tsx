import moment from "moment";
import { toast } from "react-toastify";
export const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const PasswordRegex =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
export const PhoneRegex=/^[6-9]\d{9}$/
export const NameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
export const DateOfBirthRegex=/^((19[6-9]\d|200[0-4])-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))|((20[01]\d|2005)-(0[1-9]|1[0-2])-(0[1-9]|1\d|2[0-9]|30))$/;
export const PinCodeRegex=/^\d{1,6}$/
export const AadharRegex=/(^[0-9]{4}[0-9]{4}[0-9]{4}$)|(^[0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|(^[0-9]{4}-[0-9]{4}-[0-9]{4}$)/
export const grossIncomeRegex = /^-?0+$/
export const occupantsRegex = /^-?0+$/
export const checkEmailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const checkPhoneRegx = /^\d+$/
export const AadharRegx = /(^[0-9]{4}[0-9]{4}[0-9]{4}$)|(^[0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|(^[0-9]{4}-[0-9]{4}-[0-9]{4}$)/
export const validInputRegx= /^(?!\s*$).+/
export const onlyNumbersRegx = /^[1-9]\d*$/
export const AddressRegex=/^(?!@)[^.#$%\s]+(?:\s[^.#$%\s]+)*$/
export const InstagramRegex = /http(?:s)?:\/\/(?:www\.)?instagram\.com\/([a-zA-Z0-9_.]+)/;
export const LinkedInRegex = /http(?:s)?:\/\/(?:www\.)?linkedin\.com\/(?:in|pub)\/([a-zA-Z0-9_-]+)/;
export const FacebookRegex = /http(?:s)?:\/\/(?:www\.)?facebook\.com\/(?:\w+\/)?(?:pages\/)?([a-zA-Z0-9\.]+)/;
export const TwitterRegex = /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/;
export const formatTimeDifference=(createdDate:string)=> {
    const currentDate = moment();
    const diff = currentDate.diff(moment(createdDate), 'minutes');

    if (diff < 1) {
        return 'Just now';
    } else if (diff < 60) {
        return `${diff} min${diff > 1 ? 's' : ''} ago`;
    } else if (diff < 24 * 60) {
        return `${Math.floor(diff / 60)} hour${Math.floor(diff / 60) > 1 ? 's' : ''} ago`;
    } else if (diff < 30 * 24 * 60) {
        return `${Math.floor(diff / (24 * 60))} day${Math.floor(diff / (24 * 60)) > 1 ? 's' : ''} ago`;
    } else if (diff < 365 * 24 * 60) {
        return `${Math.floor(diff / (30 * 24 * 60))} month${Math.floor(diff / (30 * 24 * 60)) > 1 ? 's' : ''} ago`;
    } else {
        return `${Math.floor(diff / (365 * 24 * 60))} year${Math.floor(diff / (365 * 24 * 60)) > 1 ? 's' : ''} ago`;
    }
}
export const ToastError=(data:string)=>{
   toast.error(data,{
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
})
return;
}
export const ToastSuccess=(data:string)=>{
    toast.success(data,{
     position: "top-right",
     autoClose: 3000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "colored",
 })
 return;
 }
 
 export const capitalizeFirstLetter = (data:string) => {
    return data.charAt(0).toUpperCase() + data.slice(1);
  };
  export const PreventMinusPlus = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
        e.code === 'Minus' || e.code === 'NumpadMinus' || 
        e.code === 'Equal' || e.code === 'NumpadAdd' || 
        (e.code === 'ArrowDown' && Number(e.currentTarget.value) <= 0)
    ) {
        e.preventDefault();
    }
};
export const preventWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    e.preventDefault();
};
