import styles from "./Profile.module.scss"
import { IMAGES, escapeRegExp } from "../../constants"
import { useEffect, useState } from "react"

const Profile = ({userInfor, searchValue}) => {
    const [imageProfile, setImageProfile] = useState()
    useEffect(() => {
        if (userInfor?.profile_picture_url){
            fetch(userInfor.profile_picture_url)
            .then(response => response.blob())
            .then(image => {
                setImageProfile(URL.createObjectURL(image));
            }).catch(err => {});
        }
        
    }, [userInfor])


    const highlightText = (text = "", textSearch) => {
        if (!!text && text.trim && !!textSearch && textSearch.trim()) {
            const regex = new RegExp(`(${escapeRegExp(textSearch)})`, "i");
            const parts = text.split(regex)
            return (
                <span>
                    {parts.filter(part => part).map((part, i) => (
                        regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
                    ))}
                </span>
            )
        }
        else return <span>{text}</span>
    }

    return <div className={styles.container}>
        <div className={styles.avatarCtn}>
            <img src={imageProfile || IMAGES.DEFAULT_AVATAR} width="150px" height="150px" alt=""/>
            <div>{!!userInfor?.first_name && !!userInfor.last_name  ? `${userInfor?.first_name} ${userInfor?.last_name}` : ""}</div>
        </div>
        <div className={styles.userInforCtn}>
                <div className={styles.userInfoItem}>
                        <img src={IMAGES.BRIEFCASE_ICON} alt="employment icon"/>
                        <div>{highlightText(userInfor?.employment?.title, searchValue)}</div>
                </div>
                <div className={styles.userInfoItem}>
                        <img src={IMAGES.MAIL_ICON} alt="mail icon"/>
                        <div>{highlightText(userInfor?.email, searchValue)}</div>
                </div>
                <div className={styles.userInfoItem}>
                        <img src={IMAGES.CALENDAR_ICON} alt="calendar icon"/>
                        <div>{highlightText(userInfor?.date_of_birth, searchValue)}</div>
                </div>
        </div>
    </div>
}

export default Profile