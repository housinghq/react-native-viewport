# Skele Components

Skele's `components` package is a library of custom components that aid in building React and React Native apps.

## Available Components

### Viewport Tracker

Tracks the position and size of a `ScrollView`, `FlatList` or `SectionList` viewport.
Communicates it to all viewport aware child components.

#### Usage

```javascript
import { Viewport } from '@skele/components'

render() {
  return (
    <Viewport.Tracker>
      <ScrollView scrollEventThrottle={16}>
        { this.props.children }
      </ScrollView>
    </Viewport.Tracker>
  )
}
```

### Viewport Aware

A higher-order component that processes the information communicated by the viewport tracker.
Determines whether the wrapped component is in or outside the viewport.
Updates the `inViewport` property of the wrapped component accordingly.
Invokes `onViewportEnter` and `onViewportLeave` when the component enters or leaves the viewport.
Note that handling updates of `inViewport` is the preferred way of reacting to visibility changes.

#### Usage

```javascript
import { Image } from 'react-native'
import { Viewport } from '@skele/components'
const ViewportAwareImage = Viewport.Aware(Image)

render() {
  return (
    <ViewportAwareImage
      source={{ uri: 'https://facebook.github.io/react-native/img/header_logo.png' }}
      preTriggerRatio={0.5}
      onViewportEnter={() => console.log('Entered!')}
      onViewportLeave={() => console.log('Left!')}
      innerRef={ref => (this._ref = ref)} />
  )
}
```

#### Properties

| Prop | Description | Default |
|---|---|---|
|**`preTriggerRatio`**| Determines pre-triggering of `inViewport`. Useful for rendering components beforehand to improve user experience. A ratio of `0.5` means that the effective viewport will be twice the size of the real viewport. | `0` |
|**`onViewportEnter`**| Invoked when the component enters the viewport. | `null` |
|**`onViewportLeave`**| Invoked when the component leaves the viewport. | `null` |
|**`innerRef`**| Allows access to the reference of the wrapped component. | `null` |
