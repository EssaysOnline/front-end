import React from 'react';
import SortInput from './SortInput';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Sort = () => {
  const router = useRouter();
  const curentURL = router.asPath;

  const [tabs, setTabs] = useState([
    { name: 'All Orders', href: '/customer/active', current: true },
    { name: 'In Progress', href: '/customer/inprogress', current: false },
    { name: 'Closed', href: '/customer/closed', current: false },
  ]);

  return (
    <>
      <div className="border-b border-gray-200">
        <div className="sm:flex sm:items-baseline">
          <div className="mt-4 sm:mt-0">
            <nav className="-mb-px flex space-x-8">
              {tabs?.map((tab) => (
                <Link
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    curentURL === tab.href
                      ? 'border-[#286bb8] text-[#286bb8]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm',
                  )}
                >
                  {tab.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      {/* <SortInput /> */}
    </>
  );
};

export default Sort;
