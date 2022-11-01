import React, { useState } from 'react';

export default function HooksPractice() {
  return (
    <>{ContactsTable(contacts)}</>
  );
}

function ContactsTable(contacts) {
  const [showMore, setShowMore] = useState(false);

  function showDetails() {
    setShowMore(!showMore);
  }

  const eachContact = contacts.map((contact, index) => {
    return (
      <li key={index}>
        <p style={{ color: 'red' }}>{`${contact.firstname} ${contact.lastname}`}</p>
        { showMore &&
        <>
          <p>{`number: ${contact.phoneNumber}`}</p>
          <p>{`email: ${contact.email}`}</p>
        </>

        }

      </li>
    );
  });
  return (
    <ul onClick={showDetails}>{eachContact}</ul>
  );
}

const contacts = [
  {
    firstname: 'Yuliia',
    lastname: 'Pchelintseva',
    phoneNumber: '9496314567',
    email: 'yuliia@mail.com',
    address: { street: '440 Street', city: 'Santa Barbara', state: 'CA', zipcode: '93101' }
  },
  {
    firstname: 'Louis',
    lastname: 'Martin',
    phoneNumber: '9494314510',
    email: 'louis@mail.com',
    address: { street: '440 Street', city: 'Santa Barbara', state: 'CA', zipcode: '93101' }
  },
  {
    firstname: 'Frank',
    lastname: 'Sinatra',
    phoneNumber: '9494314510',
    email: 'frank@mail.com',
    address: { street: '440 Street', city: 'Santa Barbara', state: 'CA', zipcode: '93101' }
  }
];
