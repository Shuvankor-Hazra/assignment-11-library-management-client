/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const TabCategory = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/books`);
            setBooks(data);
        }
        getData();
    }, [])

    return (
        <Tabs className='mb-12'>
        <div className='text-center py-6 space-y-2'>
            <h1 className='text-xl lg:text-3xl font-semibold capitalize'>Browse jobs by categories</h1>
            <p className='max-w-2xl mx-auto'>Objectively expedite holistic value before progressive supply chains. Quickly enable optimal ROI after future-proof best.</p>
        </div>
        <TabList>
            <div className='text-center mt-5'>
                <Tab>Web Development</Tab>
                <Tab>Graphics Design</Tab>
                <Tab>Digital Marketing</Tab>
            </div>
        </TabList>

        <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 '>
                {
                    books
                        .filter(b => b.category === 'Web Development')
                        .map(book => <BookCard key={book._id} book={book} />)
                }
            </div>
        </TabPanel>
    </Tabs>
    );
};

export default TabCategory;