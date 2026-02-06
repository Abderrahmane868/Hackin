function singinBtn() {
  return (
    <>
      <Link href="/auth/signup">
        <button className="bg-gradient-to-r from-[#9C4DF4] to-[#5B2D8E] w-50 h-15 px-4 py-2 bg-purple-500 text-white rounded">
          Get started
        </button>
      </Link>

      <button className="bg-gradient-to-r from-[#9C4DF4] to-[#5B2D8E] px-4 py-2 bg-purple-500 text-white rounded">
        Join as a trainner
      </button>
      <button className="bg-gradient-to-r from-[#9C4DF4] to-[#5B2D8E] px-4 py-2 bg-purple-500 text-white rounded">
        Become a freelancer
      </button>
    </>
  );

}
