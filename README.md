# IEEE SRM Student Branch Main Website

## Project Overview

This project involves developing the main website for the IEEE SRM Student Branch using Next.js. The website will showcase our events, team, and resources, providing a hub for all club activities.

## How to Contribute

### Clone the Repository

1. **Clone** the main website repository to your local machine:

```bash
   git clone https://github.com/IEEE-SRMIST/main-website.git
   cd main-website
```

### Make Changes

2. **Make your desired changes** to the codebase. Ensure your changes follow the coding standards and guidelines of the project.

### Push Changes

3. **Push** your changes directly to the relevant branch in the main repository. For example, if you are working on a specific component, replace `<component_name>` with the branch name for that component:

```bash
   git push origin <component_name>
```

### Create a Pull Request

4. **Create a Pull Request** (PR) from your branch:
   - Navigate to the repository on GitHub.
   - Go to your branch and click on the "Compare & pull request" button.
   - Provide a descriptive title and summary of your changes in the PR description.
   - Click on "Create pull request" to submit your contribution for review.

### Review and Merge

5. **Review and address feedback** provided by maintainers during the PR review process.
6. Once approved, the maintainers will **merge** your changes into the main branch.

### Sync your Local Repository

7. Occasionally, you will need to sync your local branch with the main branch to keep it up to date:

```bash
   git fetch origin
   git checkout main
   git merge origin/main
```

or

To update your local repository before syncing your fork and then updating your fork via CLI:

```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   git push origin main
```

# Development Guidelines

## File Path Structure

### New Page

Every new page should follow the NextJS page path structure.

```
├── app
│   ├── <new_page>
│   │   ├── page.tsx
```

### New Component

#### Exclusive to current page

For components that are exclusive to a specific page, place them within the corresponding page directory:

```
├── app
│   ├── <page_name>
│   │   ├── components
│   │   │   ├── <component_name>.tsx
│   │   ├── page.tsx
```

#### Components with Sub Components

For components that are big and can be broken down into smaller sub components which not used anywhere else, create a folder in its name and place the component along with the sub components.

```
├── app
│   ├── <page_name>
│   │   ├── components
│   │   │   ├── <component_name>
│   │   │   │   ├── <component_name>.tsx
│   │   │   │   ├── <sub_component>.tsx
│   │   │   │   ├── <sub_component>.tsx
```

#### Reusable Across Multiple Pages

For components that are reusable across multiple pages (like Navbar, Footer, etc) and the components exclusive to the landing page, place them in the global components directory:

```
├── app
│   ├── components
│   │   ├── <component_name>
│   │   │   ├── <component_name>.tsx
│   │   │   ├── <sub_component>.tsx
```

### Scripts

[Will be updated soon]

## Coding Procedures

By adhering to these coding habits, we can maintain a clean, efficient, and scalable codebase that is easy to understand and collaborate on.

### Consistent Naming Conventions

Use clear and descriptive names for variables, functions, and components.

```
camelCase for variables and functions.
PascalCase for components.
snake_case for file and folder names.
```

### Adhere to DRY Principle

Avoid duplicating code. Reuse functions and components where possible. Refactor repetitive code into reusable functions or components.

Break down your code into small, reusable components.
Ensure each component has a single responsibility.

### Write Modular Code

Each component should do one thing and do it well.
If a component grows too large, break it down into smaller sub-components.

Instead of creating a large, monolithic component that handles multiple responsibilities, break it down into smaller, focused components. For example, if you have a user profile page that displays user information and a list of user posts, you can create separate components for each responsibility.

```tsx
// UserProfile.tsx
import React from "react";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";

const UserProfile = () => {
  return (
    <div>
      <UserInfo /> // Component to show info
      <UserPosts /> // Component to show post
    </div>
  );
};

export default UserProfile;

// UserInfo.tsx
import React from "react";

const UserInfo = () => {
  // Fetch and display user information
  return (
    <div>
      <h2>User Information</h2>
      {/* Display user information here */}
    </div>
  );
};

export default UserInfo;

// UserPosts.tsx
import React from "react";

const UserPosts = () => {
  // Fetch and display user posts
  return (
    <div>
      <h2>User Posts</h2>
      {/* Display user posts here */}
    </div>
  );
};

export default UserPosts;
```

### Use TypeScript for Type Safety

Define types for props, state, and function return values. Utilize TypeScript interfaces and types to ensure robust type checking.

### Comment and Document Your Code

Write comments to explain the purpose of complex code blocks.
Maintain up-to-date documentation for your codebase and individual functions or components.

Look at the below example and provide necessary comments in you code similar to the comments given for the below component and the function.

```tsx
import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import axios from "axios";

// Define the structure of user data
interface User {
  id: number;
  name: string;
  email: string;
}

/**
 * UserPage component displays user details fetched from API.
 * @component
 */
const UserPage: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div>
      <Head>
        <title>User Details - {user.name}</title>
        <meta name="description" content={`Details for user ${user.name}`} />
      </Head>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

/**
 * Fetches user data from an external API using server-side rendering.
 * @param context The context object for the current request.
 * @returns An object containing the fetched user data as props.
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    // Make API request to fetch user data based on context.params.id
    const userId = context.params?.id;
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user: User = response.data;

    // Return user data as props to the UserPage component
    return {
      props: { user },
    };
  } catch (error) {
    console.error("Error fetching user data:", error);
    // Return an empty user object if there's an error
    return {
      props: { user: {} as User }, // Type assertion to avoid undefined user
    };
  }
};

export default UserPage;
```

### Follow Proper Indentation and Spacing

Use consistent indentation of 2 spaces.
Ensure proper spacing around operators and keywords for better readability.

```tsx
// Indentation Example
<div>
  <Head>
    <title>User Details - {user.name}</title>
    <meta name="description" content={`Details for user ${user.name}`} />
  </Head>
  <h1>User Details</h1>
  <p>Name: {user.name}</p>
  <p>Email: {user.email}</p>
</div>;

// Spacing between operators
const userId = 1; // Wrong
const userName = "Kristen"; // Right
const result = 5 + 1 / 2;
```

<!-- ### Use Prettier for Code Formatting
   - Ensure consistent code formatting by using Prettier.
   - Format your code regularly to maintain a clean and readable codebase. -->

<!-- ### Lint Your Code
   - Use ESLint to catch potential issues and enforce coding standards.
   - Regularly run the linter and fix reported issues promptly. -->

<!-- ### Optimize Performance
- Avoid unnecessary re-renders by using React.memo and useCallback where appropriate.
- Lazy load components and images to improve initial load times. -->

<!-- ### Handle Errors Gracefully
- Implement proper error handling in your code.
- Use try-catch blocks for asynchronous operations and display user-friendly error messages. -->

<!-- ### Write Tests
- Write unit tests for individual components and functions.
- Use integration tests to ensure different parts of the application work together correctly. -->

### Version Control

Commit your changes frequently with clear and concise commit messages.Use branches for new features and bug fixes, and follow a consistent branching strategy.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

<!-- ## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
