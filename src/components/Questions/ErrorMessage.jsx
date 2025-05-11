function ErrorMessage() {
  return (
    <div className="text-red-600 text-center flex items-center gap-2 justify-center font-Rubix_Regular">
      <img src="/assets/images/icon-error.svg" className="w-5" />
      <h3>Please select an answer</h3>
    </div>
  );
}

export default ErrorMessage;
