import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { TaskIconWithBadge } from "./"

storiesOf("TaskIconWithBadge", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <TaskIconWithBadge text="TaskIconWithBadge" />
      </UseCase>
    </Story>
  ))
