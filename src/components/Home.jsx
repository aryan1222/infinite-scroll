import React, {useState, useEffect, useRef, useCallback} from 'react'
import api from '../api/contacts';
import ContactList from './ContactList';
import NavBar from './NavBar';

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const observer = useRef();

  const lastContactElementRef = useCallback(node =>{
    if(loading) return;
    if(observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries =>{
      if(entries[0].isIntersecting){
        setPageNumber(pageNumber + 1);
      }
    })
    if(node) observer.current.observe(node);
  }, [loading])
  
  useEffect(() => {
    setLoading(true);
    const fetchContacts = async () => {
      const res = await api.get(`/?results=30`);

      let retrievedContacts = [...new Set([...contacts, ...res.data.results.map(c => {
        return {
          id: c.id.value,
          name : c.name.title + ' ' + c.name.first + ' ' + c.name.last,
          email: c.email,
          image: c.picture.thumbnail
        }
      })])]

      setContacts(retrievedContacts);
      setLoading(false);
    }

    fetchContacts();
  },[pageNumber])

  return (
    <div>
      <NavBar/>
      <ContactList contacts={contacts} lastContactElementRef={lastContactElementRef}/>
      {loading && <h1>Loading...</h1>}
    </div>
  )
}

export default Home