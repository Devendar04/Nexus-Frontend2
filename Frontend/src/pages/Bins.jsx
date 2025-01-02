import React, { useState } from 'react';
import BinsSearch from '../components/bins/BinsSearch';
import BinsList from '../components/bins/BinsList';
import BinDetails from '../components/bins/BinDetails';
import Container from '../components/ui/Container';

const Bins = () => {
  const [selectedBin, setSelectedBin] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="pt-16">
      <Container>
        <div className="py-8">
          <BinsSearch onSearch={setSearchQuery} />
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <BinsList 
                searchQuery={searchQuery}
                onBinSelect={setSelectedBin}
                selectedBinId={selectedBin?.id}
              />
            </div>
            <div className="lg:col-span-2">
              {selectedBin ? (
                <BinDetails bin={selectedBin} />
              ) : (
                <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-lg p-8 text-center">
                  <p className="text-gray-600 dark:text-gray-300">
                    Select a bin to view its details
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Bins;