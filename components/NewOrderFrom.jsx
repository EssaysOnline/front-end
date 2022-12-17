import React from 'react';
import AssignmentLanguage from './NewOrderInputs/AssignmentLanguage';
import AssignmentTypeInput from './NewOrderInputs/AssignmentTypeInput';
import AssignmentDetails from './NewOrderInputs/AssignmentDetails';
import AssignmentEducationLevel from './NewOrderInputs/AssignmentEducationLevel';
import AssignmentDeadline from './NewOrderInputs/AssignmentDeadline';
import AssignmentSize from './NewOrderInputs/AssignmentSize';
import { useState, useEffect } from 'react';

const NewOrderFrom = () => {
  let [formData, setFormData] = useState({});

  const assignmentTypeData = (data) => {
    setFormData({ ...formData, assignmentTypeData: data });
  };

  console.log(formData);

  return (
    <div className="mx-auto my-11 max-w-full shadow-lg bg-white dark:bg-[#273142] ">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6 dark:bg-[#273142] ">
                  <div className="grid grid-cols-6 gap-6 my-5">
                    <AssignmentTypeInput
                      assignmentTypeData={assignmentTypeData}
                    />
                    <AssignmentLanguage />
                  </div>
                  <div className="grid grid-cols-6 gap-6 mt-20 ">
                    <AssignmentDetails />
                    <AssignmentDeadline />
                    <AssignmentEducationLevel />
                  </div>
                  <div className="mt-20">
                    <AssignmentSize />
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-[#273142] px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-[#367fd3]  py-2 px-4 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-[#367fd3] focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrderFrom;