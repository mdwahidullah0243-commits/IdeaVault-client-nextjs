import { Tag, TagGroup } from "@heroui/react";

const TagGroupBasic = ({ tags }) => {
    return (
        <TagGroup aria-label="Tags" selectionMode="single">
            <TagGroup.List>
                {
                    tags.map((tag, index) => (
                        <Tag key={index} id={index}>
                            {tag}
                        </Tag>
                    ))
                }
            </TagGroup.List>
        </TagGroup>
    );
};

export default TagGroupBasic;