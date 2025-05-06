const Services = () => {
    return (
        <>
        <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">📒 React Hooks Notes</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* What are Hooks */}
        <div className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">✨ What are Hooks?</h2>
          <p className="text-gray-700">
            Hooks are special functions in React that let you use state and other React features inside functional components.
            They were introduced in React 16.8 and make it easier to share logic and manage component behavior without class components.
          </p>
        </div>

        {/* Why Hooks */}
        <div className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">💡 Why Hooks?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>No need for class components.</li>
            <li>Simpler, cleaner code.</li>
            <li>Easier to reuse logic using custom hooks.</li>
            <li>Better separation of concerns.</li>
          </ul>
        </div>

        {/* Hook Rules */}
        <div className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition md:col-span-2">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">📌 Hook Rules</h2>
          <ul className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Hooks can only be called inside React function components.</li>
            <li>Hooks must be called at the top level of a component (not inside loops, conditions, or nested functions).</li>
            <li>Hooks cannot be used inside class components.</li>
          </ul>
        </div>

        {/* Common Hooks */}
        <div className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition md:col-span-2">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">🔥 Common React Hooks</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><span className="font-medium">useState</span> — for managing local state.</li>
            <li><span className="font-medium">useEffect</span> — for side effects like API calls or subscriptions.</li>
            <li><span className="font-medium">useContext</span> — to access context data.</li>
            <li><span className="font-medium">useRef</span> — to persist values between renders.</li>
            <li><span className="font-medium">useMemo</span> — to memoize computed values.</li>
            <li><span className="font-medium">useCallback</span> — to memoize callback functions.</li>
          </ul>
        </div>
      </div>
    </div>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">What Are Hooks in React JS?</h1>
        <p className="text-gray-700 mb-4">
          Hooks are special functions in React that let you "hook into" React features like state, lifecycle methods, and context from functional components.
          <br /><br />
          Before Hooks, if you wanted to use state or lifecycle features, you'd have to use class components. Hooks changed that — now you can use powerful features inside simple functional components.
        </p>
        <p className="text-gray-700 mb-4">
          Hooks were added to React in version <span className="font-semibold">16.8</span>.
          <br /><br />
          Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Hook Rules</span>
          <br /><br />
          There are 3 rules for hooks:
          <ul className="list-disc list-inside mt-2">
            <li>Hooks can only be called inside React function components.</li>
            <li>Hooks can only be called at the top level of a component.</li>
            <li>Hooks cannot be conditional.</li>
          </ul>
          <br />
          <span className="italic">Note:</span> Hooks will not work in React class components.
        </p>
      </div>
      
      </>
    );
  };
  
  export default Services;
  