import * as React from "react"
import { IconWithBadgeProps, IconWithBadge } from "../IconWithBadge";

export interface TaskIconWithBadgeProps extends IconWithBadgeProps {}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function TaskIconWithBadge(props: TaskIconWithBadgeProps) {

  return (
    <IconWithBadge {...props} badgeCount={3}/>
  )
}
