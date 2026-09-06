import { CreationCategory } from 'interfaces/CreationCategory'

export const creationCategoryLabel = (category: CreationCategory): string => {
  if (category === "service") return "Service";
  if (category === "software") return "Software";
  return "Writing";
}
