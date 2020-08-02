// Editor page - reducer

// Initial state
export const init = {
  title: "",
  desc: "",
  team: 1,
  stats: {
    jibber: 0,
    jabber: 0,
    hallugah: 0,
    wazoon: 0,
    bopple: 0,
  },
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_VALUE":
      return { ...state, [payload.name]: payload.value };

    case "SET_STATS":
      const tmp = { ...state };
      tmp.stats[payload.name] = payload.value;
      return tmp;

    default:
      return state;
  }
};
