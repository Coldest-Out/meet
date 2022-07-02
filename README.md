# Meet

## User Stories & Gherkin Syntax

### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
1. **User Story:**
- As a user
- I should be able click on an event
- So that I can see the event details

2. **Scenario 1:** An event element is collapsed by default
- **Given** the user is on the main page of the app
- **When** an event is displayed
- **Then** the event details will be collapsed.

3. **Scenario 2:** User can expand an event to see its details
- **Given** the user is displayed with a list of events
- **When** the user clicks on an individual event
- **Then** the event details will be displayed

4. **Scenario 3:** User can collapse an event to hide its details
- **Given** The user has clicked on an event to display details
- **When** the user clicks on “close” button
- **Then** the event details will hide

### FEATURE 3: SPECIFY NUMBER OF EVENTS
1. **User Story:**
- As a user
- I should be able to see a chosen amount of events in my city at a time
- So that I can see many or few at a time

2. **Scenario 1:** When user hasn’t specified a number, 32 is the default number
- **Given** the user hasn’t specified a number of event
- **When** the user started their search in a city
- **Then** 32 event will be seen at a time

3. **Scenario 2:** User can change the number of events they want to see
- **Given** the user specified a number of event
- **When** the user started their search in a city
- **Then** that number of events will be seen at a time

### FEATURE 4: USE THE APP WHEN OFFLINE
1. **User Story:**
- As a user
- I should be able to use the app when its offline
- So that I can view events without internet access

2. **Scenario 1:** Show cached data when there’s no internet connection
- **Given** the user wants to use the app without internet/data connection
- **When** the user uses the app
- **Then** the app will use the cache data

3. **Scenario 2:** Show error when user changes the settings (city, time range)
- **Given** the user wants to start a new search
- **When** they want to view other events
- **Then** they get an error because they don’t have internet/data connection

### FEATURE 5: DATA VISUALIZATION
1. **User Story:**
- As a user
- I should be able to see a chart of the upcoming events
- So that I can plan ahead

2. **Scenario 1:** Show a chart with the number of upcoming events in each city
- **Given** the user wants to see upcoming events 
- **When** searching for events in a city
- **Then** the events should display in an organized way