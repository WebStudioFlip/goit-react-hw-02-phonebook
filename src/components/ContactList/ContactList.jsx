import PropTypes from "prop-types";
import style from  "./contactList.module.css";

const ContactList = (props)=> {
    const {contacts, removeContact} = props
    const elements = contacts.map(item => <li className={style.contactListItem} key={item.id}>
        {item.name}. {item.number}. <button className={style.btn} onClick={()=>removeContact(item.id)}>Delete</button>
    </li>);
    return (        
        <ul className={style.contactsList}>
        {elements}
    </ul>        
    )
}

export default ContactList;

ContactList.defaultProps = {
    options: []
}

ContactList.propTypes = {   
    props: PropTypes.shape(
        {
            contacts: PropTypes.array, 
            removeContact:PropTypes.func,
        }
    ) 
}