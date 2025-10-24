import React from 'react';
import Head from 'next/head';

const MoviesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Movies - CineSeek</title>
        <meta name="description" content="Browse and discover amazing movies" />
      </Head>
      <div className="bg-[#171D22] text-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
            Discover <span className="text-[#E2D609]">Movies</span>
          </h1>
          <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
            Explore our vast collection of movies from different genres and eras.
          </p>
          <div className="text-center">
            <p className="text-xl">Movie catalog coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesPage;
