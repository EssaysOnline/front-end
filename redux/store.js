import { configureStore } from '@reduxjs/toolkit';
import allAssignmentData from './features/assignmentData';
import allOrderData from './features/orderData';
import editOrderData from './features/editOrederData';
import writerOrderData from './features/writerOrderData';
import sortedOrder from './features/sortedOrder';
import orderPayData from './features/orderPayData';

export const store = configureStore({
  reducer: {
    assignmentData: allAssignmentData,
    orderData: allOrderData,
    editOrder: editOrderData,
    writerOrderData: writerOrderData,
    sortedOrder: sortedOrder,
    orderPayData: orderPayData,
  },
});
