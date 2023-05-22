let getTimerId = () => {
  let timerId = sessionStorage.getItem("intervalId");

  return timerId;
};

export { getTimerId };
