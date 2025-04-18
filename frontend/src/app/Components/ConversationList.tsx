import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Convertype from "./Types"

type GroupedConversations = {
    [key: string]: Convertype[];
};
interface ConversationListProps {
    Conversations: Convertype[];
    SetConversations: React.Dispatch<React.SetStateAction<Convertype[]>>;
    selectedconversation:string,
    setselectedconversation:React.Dispatch<React.SetStateAction<string>>
  }
  
  const ConversationList: React.FC<ConversationListProps> = ({
    Conversations,
    SetConversations,
    selectedconversation,
    setselectedconversation
  }) => {
   
    console.log(Conversations)
    // Get current date for month/year calculations
    const currentDate = new Date();
    
    // Function to determine year for month categories
    const getYearForMonth = (monthName: string): number => {
        const monthIndex = new Date(`${monthName} 1, 2000`).getMonth();
        return monthIndex > currentDate.getMonth() ? 
            currentDate.getFullYear() - 1 : 
            currentDate.getFullYear();
    };

    // Group and sort Conversations
    const groupedConversations = Conversations.reduce((acc, conv) => {
        const category = conv.category || 'Other';
        if (!acc[category]) acc[category] = [];
        acc[category].push(conv);
        return acc;
    }, {} as GroupedConversations);

    // Define static category order
    const staticCategories = [
        'Today',
        'Yesterday', 
        'Last 7 Days',
        'Last 30 Days'
    ];

    // Extract and sort month categories
    const monthCategories = Object.keys(groupedConversations)
        .filter(cat => 
            /^(January|February|March|April|May|June|July|August|September|October|November|December)$/.test(cat)
        )
        .sort((a, b) => {
            const yearA = getYearForMonth(a);
            const yearB = getYearForMonth(b);
            const dateA = new Date(`${a} 1, ${yearA}`);
            const dateB = new Date(`${b} 1, ${yearB}`);
            return dateB.getTime() - dateA.getTime();
        });

    // Define remaining categories
    const otherCategories = [
        'This Year',
        'Last Year',
        'Other'
    ];

    const getConversations = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/Con/getAllConversation", {
                withCredentials: true
            });
            
            SetConversations(response.data);
        } catch (error) {
            console.error('Error fetching Conversations:', error);
        }
    };

    useEffect(() => {  
        getConversations();
    }, []);

    return (
        <div className='  h-fit w-full flex flex-col items-center gap-2  text-white'>
            {/* Render static categories */}
            {staticCategories.map(category => (
                groupedConversations[category] && (
                    <div key={category} className="w-[90%] felx flex-col cursor-pointer"
                    
                    >
                        <h1 className="text-white bg-[#181818] text-sm mb-1 p-2  sticky top-0">
                            {category}
                        </h1>
                        {groupedConversations[category].map((item, i) => (
                            <div key={i}
                             className={` w-[80%]  ml-3 text-sm p-2 mt-0.5 max-h-[7vh] text-nowrap overflow-hidden ${selectedconversation==item._id?"bg-gray-700":"hover:bg-gray-700"}  rounded`}
                             onClick={()=>setselectedconversation(item._id)}
                             >
                                {item.convoname}
                            </div>
                        ))}
                    </div>
                )
            ))}

            {/* Render sorted month categories */}
            {monthCategories.map(category => (
                groupedConversations[category] && (
                    <div key={category} className="w-[90%] felx flex-col cursor-pointer"
                    
                    >
                        <h1 className="text-white bg-[#181818] text-sm mb-1 p-2  sticky top-0">
                            {category}
                        </h1>
                        {groupedConversations[category].map((item, i) => (
                            <div key={i}
                             className=" w-[80%]  ml-3 text-sm p-2 mt-0.5 max-h-[7vh] text-nowrap overflow-hidden   hover:bg-gray-700 rounded"
                             onClick={()=>setselectedconversation(item._id)}
                             >
                                {item.convoname}
                            </div>
                        ))}
                    </div>
                )
            ))}

            {/* Render remaining categories */}
            {otherCategories.map(category => (
                groupedConversations[category] && (
                    <div key={category} className="w-[90%] felx flex-col cursor-pointer"
                    
                    >
                        <h1 className="text-white bg-[#181818] text-sm mb-1 p-2  sticky top-0">
                            {category}
                        </h1>
                        {groupedConversations[category].map((item, i) => (
                            <div key={i}
                             className=" w-[80%]  ml-3 text-sm p-2 mt-0.5 max-h-[7vh] text-nowrap overflow-hidden   hover:bg-gray-700 rounded"
                             onClick={()=>setselectedconversation(item._id)}
                             >
                                {item.convoname}
                            </div>
                        ))}
                    </div>
                )
            ))}
        </div>
    );
};

export default ConversationList;