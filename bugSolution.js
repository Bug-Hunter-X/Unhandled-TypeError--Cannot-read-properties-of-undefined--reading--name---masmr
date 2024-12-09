```javascript
const MyComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserData().then(setUser);
  }, []);

  return (
    <View>
      <Text>{user?.name ?? 'Unknown User'}</Text>  // Safe access with optional chaining and default
    </View>
  );
};
```

This improved code uses the optional chaining operator (`?.`) to safely access `user.name`. If `user` is `null` or `undefined`, the expression short-circuits, preventing the error.  The nullish coalescing operator (`??`) then provides a default value ('Unknown User' in this case) if `user.name` is also `null` or `undefined`.