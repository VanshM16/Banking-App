import RightSidebar from '@/components/RightSidebar';
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn={firstName:"Vansh" , lastName:"Mittal", email:"vanshmittal483@gmail.com"};
  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
            <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstname||'guest'}
            subtext="Access and manage your account and transactions efficiently."
            />
            <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
            />
        </header>

        RECENT TRANSCATIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:1798721},{currentBalance:62384}]}
      />
      </section>
  )
}

export default Home