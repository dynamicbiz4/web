const ToTopButton = () => {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return <div>ToTop</div>;
};

export default ToTopButton;
