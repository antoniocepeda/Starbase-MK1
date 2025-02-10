import React, { useState } from 'react';
import { HomePage } from './features/home/components/HomePage';
import { OnlineCoursesPage } from './features/courses/components/OnlineCoursesPage';
import { InPersonClassesPage } from './features/classes/components/InPersonClassesPage';
import { RobotKitsPage } from './features/kits/components/RobotKitsPage';

// Force scroll position reset on refresh
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

function App() {
  const [showOnlineCourses, setShowOnlineCourses] = useState(false);
  const [showInPersonClasses, setShowInPersonClasses] = useState(false);
  const [showRobotKits, setShowRobotKits] = useState(false);

  if (showOnlineCourses) {
    return <OnlineCoursesPage />;
  }

  if (showInPersonClasses) {
    return <InPersonClassesPage />;
  }

  if (showRobotKits) {
    return <RobotKitsPage />;
  }

  return (
    <HomePage
      onShowOnlineCourses={() => setShowOnlineCourses(true)}
      onShowInPersonClasses={() => setShowInPersonClasses(true)}
      onShowRobotKits={() => setShowRobotKits(true)}
    />
  );
}

export default App;