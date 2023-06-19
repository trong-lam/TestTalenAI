import { useEffect, useState } from "react"
import Footer from "../../components/Footer/Footer"
import Profile from "../../components/Profile/Profile"
import styles from "./UserProfile.module.scss"
import { useParams } from "react-router-dom"

const UserProfile = () => {
    const {id} = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`/api/users/${id}`).then((response) => response.json())
        .then((r) => setUser(r)).catch((err) => {
            console.log(err)
        })
    }, [id])
    return (
        <div className={styles.container}>
            <Profile userInfor={user}/>
            <Footer />
        </div>
    )
}

export default UserProfile