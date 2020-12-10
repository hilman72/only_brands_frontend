import React from "react"
import "./UserInfoCard.components.scss"
import Button from '@material-ui/core/Button'
// import Fab from '@material-ui/core/Fab'

function UserInfoCard(){
    return (
    <div class="UserInfoCard">
        <p>(propic)</p>
        <h3>UserName</h3>
        <p>description</p>
        <Button>Follow</Button>
    </div>
    )
}

export default UserInfoCard;