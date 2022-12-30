import React from 'react'

const ContactList = (props) => {

  const {contacts, lastContactElementRef} = props;

  return (
    <div className="contactList">
      {contacts.map((contact, index) => {
        if(index === contacts.length - 1) {
          return <div key={contact.email} ref={lastContactElementRef}>
            <p>{contact.name}</p>
          </div>
        }else{
          return <div key={contact.email} className="contactCard">
            <p>{contact.name}</p> 
            <img src={contact.image} alt={contact.id}/>
          </div>
        }
      })}
    </div>
  )
}

export default ContactList