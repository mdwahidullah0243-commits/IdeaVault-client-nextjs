import { Tag, TagGroup } from "@heroui/react";

const TagGroupBasic = () => {
    return (
        <TagGroup aria-label="Tags" selectionMode="single">
            <TagGroup.List>
                <Tag id="default-news">
                    News
                </Tag>
                <Tag id="default-travel">
                    Travel
                </Tag>
                <Tag id="default-gaming">
                    Gaming
                </Tag>
                <Tag id="default-shopping">
                    Shopping
                </Tag>
            </TagGroup.List>
        </TagGroup>
    );
};

export default TagGroupBasic;