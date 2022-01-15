export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getContactList = state => {
  const contacts = getItems(state);
  const filter = getFilter(state);

  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

// rmap и клавиша таб
// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }
