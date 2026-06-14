import type { ScheduleItem } from "@/lib/types";

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
});

const dayFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
});

const dayNumberFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
});

function groupByMonth(items: ScheduleItem[]) {
  return items.reduce<Array<{ key: string; label: string; items: ScheduleItem[] }>>((groups, item) => {
    const date = getDisplayDate(item);
    const key = `${date.getFullYear()}-${date.getMonth()}`;
    const label = monthFormatter.format(date);
    const existing = groups.find((group) => group.key === key);

    if (existing) {
      existing.items.push(item);
    } else {
      groups.push({ key, label, items: [item] });
    }

    return groups;
  }, []);
}

function getDisplayDate(item: ScheduleItem) {
  if (item.allDay && /^\d{4}-\d{2}-\d{2}$/.test(item.startsAt)) {
    return new Date(`${item.startsAt}T12:00:00`);
  }

  return new Date(item.startsAt);
}

function formatTime(item: ScheduleItem) {
  if (item.allDay) {
    return "All day";
  }

  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: item.timeZone,
  });
  const start = timeFormatter.format(new Date(item.startsAt));
  if (!item.endsAt) {
    return start;
  }

  return `${start}-${timeFormatter.format(new Date(item.endsAt))}`;
}

export function ScheduleList({
  items,
  emptyTitle,
  emptyDescription,
}: {
  items: ScheduleItem[];
  emptyTitle: string;
  emptyDescription: string;
}) {
  if (!items.length) {
    return (
      <div className="schedule-empty">
        <p className="eyebrow">Calendar</p>
        <h3>{emptyTitle}</h3>
        <p>{emptyDescription}</p>
      </div>
    );
  }

  return (
    <div className="schedule-list">
      {groupByMonth(items).map((group) => (
        <section className="schedule-month" key={group.key}>
          <div className="schedule-month__heading">
            <p className="eyebrow">{group.items[0]?.kind === "pick" ? "Barrel Pick Calendar" : "Event Schedule"}</p>
            <h2>{group.label}</h2>
          </div>
          <div className="schedule-month__items">
            {group.items.map((item) => {
              const date = getDisplayDate(item);
              return (
                <article className="schedule-item" key={`${item.kind}-${item.id}`}>
                  <div className="schedule-item__date" aria-label={date.toLocaleDateString("en-US")}>
                    <span>{dayFormatter.format(date)}</span>
                    <strong>{dayNumberFormatter.format(date)}</strong>
                  </div>
                  <div className="schedule-item__body">
                    <div>
                      <p className="schedule-item__meta">
                        {formatTime(item)}
                        {item.location ? ` · ${item.location}` : ""}
                      </p>
                      <h3>{item.title}</h3>
                      {item.description ? <p>{item.description}</p> : null}
                    </div>
                    <div className="schedule-item__actions">
                      {item.ctaUrl ? (
                        <a className="text-link" href={item.ctaUrl} target="_blank" rel="noreferrer">
                          Event details
                        </a>
                      ) : null}
                      {item.eventUrl ? (
                        <a className="text-link text-link--muted" href={item.eventUrl} target="_blank" rel="noreferrer">
                          Add to calendar
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
