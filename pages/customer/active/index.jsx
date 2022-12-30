import React, { useEffect, useState } from 'react';
import EmptyOredersList from '../../../components/EmptyOredersList';
import CustomerLayout from '../../../components/CustomerLayout';
import MyOrderLayout from '../../../components/MyOrderLayout';
import { getUserOrders } from '../../../utilities/apiFunctions';
import Cookies from 'universal-cookie';
import axios from 'axios';
import OrderCard from '../../../components/OrderCard';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderData } from '../../../redux/features/orderData';
const cookies = new Cookies();

const Active = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.orderData);
  console.log(data);

  // const getAll = async () => {
  //   const userOrder = await getUserOrders(
  //     'https://backend420.linnric.com/api/v1/get_all_client_orders',
  //   );
  //   const ordersInfo = await userOrder;
  //   setData(ordersInfo);
  //   console.log(data);
  // };

  const getUserOrders = async () => {
    const token = cookies.get('userrefreshToken');
    try {
      const getData = await axios.get(
        'https://backend420.linnric.com/api/v1/get_all_client_orders',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      dispatch(getOrderData(getData.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserOrders();
  }, []);

  let renderCondition = '';

  if (data.length === 0) {
    renderCondition = <EmptyOredersList />;
  } else {
    renderCondition = <OrderCard data={data} />;
  }

  const activeOrder = [];
  return (
    <CustomerLayout>
      <MyOrderLayout>
        <div>{renderCondition}</div>
      </MyOrderLayout>
    </CustomerLayout>
  );
};

export default Active;

// export const getStaticProps = async () => {
//   const res = await getUserOrders(
//     'https://backend420.linnric.com/api/v1/get_all_client_orders',
//   );
//   console.log(res);
//   return {
//     props: { orders:JSON.parse(JSON.stringify(res))}
//   };
// };
