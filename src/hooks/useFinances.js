import { useReducer } from "react";

const initialState = {
  dataBills: {
    week: { labels: ["Alimento", "Medicina"], data: [50, 70] },
    month: { labels: ["Alimento", "Medicina"], data: [148.5, 220.5] },
    year: { labels: ["Alimento", "Medicina"], data: [1800, 2500] },
  },
  dataEarnings: {
    week: { labels: ["Trabajo", "Freelance"], data: [75, 50] },
    month: { labels: ["Trabajo", "Freelance"], data: [300, 150] },
    year: { labels: ["Trabajo", "Freelance"], data: [3600, 1800] },
  },
  category: "Gastos",
  time: "month",
  showModal: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_TIME":
      return { ...state, time: action.payload };
    case "TOGGLE_MODAL":
      return { ...state, showModal: !state.showModal };
    case "ADD_DATA":
      const { category, time, newData } = action.payload;
      const updatedCategoryData = {
        ...state[category],
        [time]: {
          ...state[category][time],
          labels: [...state[category][time].labels, newData.label],
          data: [...state[category][time].data, newData.value],
        },
      };
      return { ...state, [category]: updatedCategoryData };

    case "EDIT_DATA":
      const {
        catIndex: editIndex,
        timePeriod: editTime,
        category: editCategory,
        updatedData,
      } = action.payload;

      if (!state[editCategory]) return state;

      return {
        ...state,
        [editCategory]: {
          ...state[editCategory],
          [editTime]: {
            labels: state[editCategory][editTime].labels.map((label, i) =>
              i === editIndex ? updatedData.label : label
            ),
            data: state[editCategory][editTime].data.map((value, i) =>
              i === editIndex ? updatedData.value : value
            ),
          },
        },
      };
    case "REMOVE_DATA":
      const { catIndex, timePeriod, category: removeCategory } = action.payload;

      if (!state[removeCategory]) return state;
      return {
        ...state,
        [removeCategory]: {
          ...state[removeCategory],
          [timePeriod]: {
            labels: state[removeCategory][timePeriod].labels.filter(
              (_, i) => i !== catIndex
            ),
            data: state[removeCategory][timePeriod].data.filter(
              (_, i) => i !== catIndex
            ),
          },
        },
      };

    default:
      return state;
  }
};

export const useFinances = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCategoryClick = (cat) => {
    dispatch({ type: "SET_CATEGORY", payload: cat });
  };

  const handleTimeClick = (t) => {
    dispatch({ type: "SET_TIME", payload: t });
  };

  const toggleModal = () => {
    dispatch({ type: "TOGGLE_MODAL" });
  };

  const addData = (category, label, value) => {
    const newData = { label, value };
    dispatch({
      type: "ADD_DATA",
      payload: {
        category: category === "Gastos" ? "dataBills" : "dataEarnings",
        time: state.time,
        newData,
      },
    });
  };
  const editData = (catIndex, timePeriod, category, updatedData) => {
    const formattedCategory =
      category === "Gastos" ? "dataBills" : "dataEarnings";

    dispatch({
      type: "EDIT_DATA",
      payload: {
        catIndex,
        timePeriod,
        category: formattedCategory,
        updatedData,
      },
    });
  };

  const removeData = (catIndex, timePeriod, category) => {
    const formattedCategory =
      category === "Gastos" ? "dataBills" : "dataEarnings";

    dispatch({
      type: "REMOVE_DATA",
      payload: { catIndex, timePeriod, category: formattedCategory },
    });
  };
  const currentData =
    state.category === "Gastos"
      ? state.dataBills[state.time]
      : state.dataEarnings[state.time];
  const chartData = {
    labels: currentData.labels,
    datasets: [
      {
        label: state.category,
        data: currentData.data,
        backgroundColor:
          state.category === "Gastos"
            ? ["#FF6384", "#36A2EB"]
            : ["#4CAF50", "#FFC107"],
      },
    ],
  };

  return {
    data: chartData,
    category: state.category,
    time: state.time,
    showModal: state.showModal,
    handleCategoryClick,
    handleTimeClick,
    toggleModal,
    addData,
    removeData,
    editData,
    dataBills: state.dataBills,
    dataEarnings: state.dataEarnings,
  };
};
