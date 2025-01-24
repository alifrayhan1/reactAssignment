// import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className="text-white px-8 py-5 bg-[#002228]">
        <div className='container mx-auto flex flex-col sm:flex-row justify-between items-center'>
          <img src="FooterLogo.png" alt="Company Logo" className='mb-4 sm:mb-0' />
          <p>Copyright © {currentYear} Wizia. All rights reserved.</p>
        </div>
      </section>
    </>
  );
}

export default Footer;
