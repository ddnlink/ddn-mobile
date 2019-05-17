import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { IconWithBadge } from "./"

storiesOf("IconWithBadge", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <IconWithBadge text="IconWithBadge" />
      </UseCase>
    </Story>
  ))
