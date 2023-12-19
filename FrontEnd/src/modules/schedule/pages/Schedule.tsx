import { Flex } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { SearchBar } from 'shared/components/molecules/SearchBar/SearchBar';
import { ScheduleCard } from '../components/ScheduleCard/ScheduleCard';
import { useHandleSchedule } from '../handlers/schedule.handlers';
import { useSchedule } from '../hooks/useSchedule';

export const Schedule = () => {
  const { schedules, listSchedule, status } = useSchedule();
  const { handleSchedule } = useHandleSchedule();
  const [search, setSearch] = useState('');

  const loadCategories = useCallback(
    (p = 1, s = '') => {
      listSchedule({ page: p, search: s });
    },
    [listSchedule]
  );

  useEffect(() => {
    loadCategories(1, search);
  }, [loadCategories, search]);

  return (
    <Flex gap="8px" flexDirection="column">
      <SearchBar
        placeholder="Pesquise por nome ou local da agenda"
        isSearching={status === 'searching'}
        onChange={(value: string) => setSearch(value)}
      />
      {schedules.map(schedule => (
        <ScheduleCard data={handleSchedule(schedule)} />
      ))}
    </Flex>
  );
};
