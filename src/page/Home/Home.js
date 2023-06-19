import { useEffect, useRef, useState } from "react"
import styles from "./Home.module.scss"
import Button from "../../components/Button/Button"
import Profile from "../../components/Profile/Profile"
import Footer from "../../components/Footer/Footer"
import { Link } from "react-router-dom"


const Home = () => {
    const [searchValue, setSearchValue] = useState("");
    const userList = useRef([]);
    const [currentList, setCurrentList] = useState([]);
    useEffect(() => {
        getUserList();
    }, [])

    const getUserList = async () => {
        const response = await fetch("/api/users").then((response) => response.json());
        userList.current = response
        setCurrentList(response);
    }

    const onClickSearch = () => {
        let newList = userList.current.filter(user => 
            user?.last_name?.toLowerCase()?.includes(searchValue)  || 
            user?.first_name?.toLowerCase()?.includes(searchValue) ||
            user?.employment?.title?.toLowerCase()?.includes(searchValue) ||
            user?.date_of_birth?.toLowerCase()?.includes(searchValue)
        ) 
        console.log(newList)
        if (searchValue === "") newList = userList.current
        setCurrentList(newList)
    }
    return <div className={styles.container}>
        <div className={styles.header}>
            <h2 className={styles.title}>{currentList.length} employees were found</h2>
            <div className={styles.searchCtn}>
                <input value={searchValue} placeholder="Search for a name..." onChange={(v) => {
                    setSearchValue(v.target.value)
                }}/>
                <Button text="search" onClick={onClickSearch}/>
                <Button text="clear" onClick={() => {
                    setCurrentList(userList.current)
                    setSearchValue("")
                }}/>
            </div>
        </div>
        
        <div className={styles.profileList}>
            {
                currentList.map((item, idx) => <Link key={idx} to={`/users/${item.id}`} style={{ textDecoration: 'none', color: "black" }}><Profile searchValue={searchValue} userInfor={item || {}}/></Link> )
            }
        </div>
        <Footer/>
    </div>
}

export default Home