import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { PaymentState } from "../../types/payment-types";
import * as paymentThunks from "./payment-thunks";

const initialState: PaymentState = {
  loading: false,
  boletoUrl: null,
  error: null,
  validateCode: null,
  plan: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    clearPaymentState: (state) => {
      state.loading = false;
      state.boletoUrl = null;
      state.error = null;
      state.plan = null;
    },
    setPlan: (state, action: PayloadAction<string | null>) => {
      state.plan = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(paymentThunks.createBoletoPayment.pending, (state) => {
        state.loading = true;
        state.boletoUrl = null;
        state.error = null;
      })
      .addCase(paymentThunks.createBoletoPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.boletoUrl = action.payload;
        state.error = null;
      })
      .addCase(paymentThunks.createBoletoPayment.rejected, (state, action) => {
        state.loading = false;
        state.boletoUrl = null;
        state.error = action.payload as string;
      })
      .addCase(paymentThunks.validateCodePlan.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(paymentThunks.validateCodePlan.fulfilled, (state, action) => {
        state.loading = false;
        state.validateCode = action.payload.validateCode;
        state.plan = action.payload.plan;
        state.error = null;
      })
      .addCase(paymentThunks.validateCodePlan.rejected, (state, action) => {
        state.loading = false;
        state.validateCode = null;
        state.plan = null;
        state.error = action.payload as string;
      });
  },
});

export const { clearPaymentState, setPlan } = paymentSlice.actions;
export default paymentSlice.reducer;
