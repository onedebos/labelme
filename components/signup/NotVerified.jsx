import Link from "next/link";

const NotVerified = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm sm:max-w-md">
        <div className="mt-4 bg-white px-6 sm:px-8 py-6 text-left shadow-lg mx-5 rounded-md">
          <h3 className="text-center text-2xl font-bold mb-4">Welcome</h3>
          <p className="mb-3">Please verify your E-mail to continue.</p>
          <p>Use the link you received in your E-mail to complete this step.</p>
          <div className="mt-3">
            If your E-mail has been verified,{" "}
            <Link href="/signin" className="text-labelme-wine">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotVerified;
