export interface Data {
  [key: string]: unknown
}

export interface ComponentObject {
  components?: Record<string, ComponentObject>
  setup?: (props?: Data, context?: Data) => Data
  render?: () => string
}

export type HandlerFunc = () => void

export interface RouterInstance {
  routerContextFn: () => {
    params: () => Record<string, string>,
    go: (path: string) => void
  }

  renderer(render: (c: ComponentObject) => void, forceUnmount: (c: ComponentObject) => void): void
}
