export const contactSelector = state => state.contacts.contacts;
export const filterSelector = state => state.contacts.filter; 
export const itemsSelector = state => state.contacts.contacts.items;
export const isLoadingSelector = state => state.contacts.contacts.isLoading;
export const errorSelector = state => state.contacts.contacts.error;